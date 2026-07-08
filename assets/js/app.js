// Peak Male Content - Main Application Logic

let videos = [
    { id: 1, title: "JCB 220X Excavator Digging Massive Foundation", uploader: "DigMaster42", views: "892k", time: "3d ago", category: "Excavation", thumbnail: "https://picsum.photos/id/1016/400/225", youtubeId: "JXTfPlPFfTc", duration: "18:42", likes: 124800, description: "The new JCB NXT 225LC in action on a huge commercial foundation job.", comments: [] },
    { id: 2, title: "JCB 3CX Backhoe Perfect Loading - Dump Truck Masterclass", uploader: "YellowIronFan", views: "1.4M", time: "1w ago", category: "Backhoe", thumbnail: "https://picsum.photos/id/160/400/225", youtubeId: "y6e3mHBpV2A", duration: "9:17", likes: 287300, description: "Cleanest loading I've seen in months.", comments: [] },
    { id: 3, title: "JCB 520X 50 Tonne Excavator Walkaround", uploader: "HeavyEquipmentDaily", views: "412k", time: "5d ago", category: "Tracked", thumbnail: "https://picsum.photos/id/201/400/225", youtubeId: "59mUfXn9tHI", duration: "13:51", likes: 67300, description: "Full walkaround of the brand new 520X.", comments: [] }
];

let liveStreams = [
    { id: 101, title: "LIVE: JCB 3CX Digging 12ft Deep Basement", uploader: "LiveFromSite", viewers: 14200, location: "Manchester, UK", thumbnail: "https://picsum.photos/id/160/400/225", youtubeId: "HXeD7mLEpSs" },
    { id: 102, title: "LIVE: 220X Loading Articulated Dump Trucks", uploader: "QuarryLife", viewers: 8700, location: "Texas, USA", thumbnail: "https://picsum.photos/id/1016/400/225", youtubeId: "JXTfPlPFfTc" }
];

let currentVideo = null;
let currentFilter = 'all';

// Render Live Streams
function renderLiveStreams() {
    const container = document.getElementById('live-grid');
    if (!container) return;
    container.innerHTML = '';
    
    liveStreams.forEach(stream => {
        const card = document.createElement('div');
        card.className = `video-card bg-zinc-900 border border-zinc-700 rounded-3xl overflow-hidden cursor-pointer group`;
        card.innerHTML = `
            <div class="thumbnail-container aspect-video relative">
                <img src="${stream.thumbnail}" class="w-full h-full object-cover">
                <div class="absolute top-3 left-3 px-3.5 py-1 bg-red-500 text-white text-[10px] font-black tracking-[1.5px] rounded-2xl flex items-center gap-x-1.5 live-badge">
                    <i class="fa-solid fa-circle text-[8px]"></i>
                    <span>LIVE</span>
                </div>
                <div class="absolute top-3 right-3 bg-black/75 text-white text-xs px-2.5 py-1 rounded-2xl flex items-center gap-x-1 font-mono">
                    <i class="fa-solid fa-eye text-[10px]"></i>
                    <span>${(stream.viewers/1000).toFixed(1)}k</span>
                </div>
                <div class="play-overlay absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10">
                    <div class="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                        <i class="fa-solid fa-play text-orange-500 ml-0.5 text-3xl"></i>
                    </div>
                </div>
            </div>
            <div class="p-4">
                <div class="font-bold leading-tight line-clamp-2 mb-1.5">${stream.title}</div>
                <div class="flex items-center justify-between text-xs">
                    <span class="text-orange-400 font-semibold">${stream.uploader}</span>
                    <span class="text-zinc-500">${stream.location}</span>
                </div>
            </div>
        `;
        card.onclick = () => openVideoModal(stream, true);
        container.appendChild(card);
    });
}

// Render Videos
function renderVideos(filtered = null) {
    const container = document.getElementById('video-grid');
    if (!container) return;
    container.innerHTML = '';
    
    let toShow = filtered || videos;
    
    if (currentFilter !== 'all') {
        toShow = toShow.filter(v => v.category === currentFilter);
    }
    
    toShow.forEach(video => {
        const card = document.createElement('div');
        card.className = `video-card bg-zinc-900 border border-zinc-700 rounded-3xl overflow-hidden cursor-pointer group`;
        card.innerHTML = `
            <div class="thumbnail-container aspect-video relative">
                <img src="${video.thumbnail}" class="w-full h-full object-cover">
                <div class="absolute bottom-2 right-2 px-2.5 py-px bg-black/80 text-white text-[10px] font-mono rounded-xl">${video.duration}</div>
                <div class="play-overlay absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0">
                    <div class="w-11 h-11 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                        <i class="fa-solid fa-play text-orange-500 ml-[3px] text-xl"></i>
                    </div>
                </div>
            </div>
            <div class="p-3.5">
                <div class="font-bold leading-tight text-[13.2px] line-clamp-2 mb-2 group-hover:text-orange-400">${video.title}</div>
                <div class="flex items-center justify-between text-xs">
                    <span class="text-orange-400 font-semibold">${video.uploader}</span>
                    <div class="flex items-center gap-x-[5px] text-zinc-400">
                        <span>${video.views}</span>
                        <span class="text-zinc-600">•</span>
                        <span>${video.time}</span>
                    </div>
                </div>
            </div>
        `;
        card.onclick = () => openVideoModal(video, false);
        container.appendChild(card);
    });
}

// Filter by category
function filterByCategory(cat) {
    currentFilter = cat;
    document.querySelectorAll('.category-pill').forEach(el => el.classList.remove('active', 'border-orange-500'));
    event.currentTarget.classList.add('active', 'border-orange-500');
    renderVideos();
}

// Open Video Modal
function openVideoModal(video, isLive = false) {
    currentVideo = video;
    const modal = document.getElementById('video-modal');
    const player = document.getElementById('player-container');
    
    player.innerHTML = '';
    modal.style.display = 'flex';
    
    document.getElementById('modal-title').innerText = video.title;
    document.getElementById('modal-uploader').innerText = video.uploader;
    document.getElementById('modal-description').innerText = video.description || "No description.";
    document.getElementById('like-count').innerText = (video.likes / 1000).toFixed(1) + 'k';
    
    if (video.youtubeId) {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        iframe.className = "w-full h-full";
        player.appendChild(iframe);
    }
    
    loadComments(video);
}

// Close modal
function closeVideoModal() {
    document.getElementById('video-modal').style.display = 'none';
    document.getElementById('player-container').innerHTML = '';
    currentVideo = null;
}

// Like functionality
function likeCurrentVideo() {
    if (!currentVideo) return;
    currentVideo.likes = (currentVideo.likes || 0) + 1240;
    document.getElementById('like-count').innerText = (currentVideo.likes / 1000).toFixed(1) + 'k';
}

// Comments
function loadComments(video) {
    const list = document.getElementById('comments-list');
    list.innerHTML = '';
    const comments = video.comments || [];
    
    if (comments.length === 0) {
        list.innerHTML = `<div class="text-center py-8 text-zinc-500 text-sm">Be the first to comment</div>`;
        return;
    }
    
    comments.forEach(c => {
        const div = document.createElement('div');
        div.className = 'flex gap-x-3';
        div.innerHTML = `
            <div class="w-8 h-8 bg-zinc-700 rounded-2xl flex-shrink-0 mt-0.5 overflow-hidden">
                <img src="https://picsum.photos/id/1005/32/32" class="w-full h-full object-cover">
            </div>
            <div class="flex-1">
                <div class="flex items-center gap-x-2">
                    <span class="font-bold text-sm">${c.user}</span>
                </div>
                <div class="text-sm text-zinc-200">${c.text}</div>
            </div>
        `;
        list.appendChild(div);
    });
}

function postComment() {
    if (!currentVideo) return;
    const input = document.getElementById('comment-input');
    if (!input.value.trim()) return;
    
    if (!currentVideo.comments) currentVideo.comments = [];
    currentVideo.comments.unshift({ user: "MikeDigger", text: input.value.trim() });
    
    input.value = '';
    loadComments(currentVideo);
}

// Upload functions
let selectedFile = null;

function showUploadModal() {
    document.getElementById('upload-modal').style.display = 'flex';
    document.getElementById('file-selected').classList.add('hidden');
    document.getElementById('drop-zone').classList.remove('hidden');
    selectedFile = null;
}

function closeUploadModal() {
    document.getElementById('upload-modal').style.display = 'none';
}

function handleFileSelect(e) {
    const file = e.target.files[0];
    if (!file) return;
    selectedFile = file;
    document.getElementById('drop-zone').classList.add('hidden');
    document.getElementById('file-selected').classList.remove('hidden');
    document.getElementById('file-name').innerText = file.name;
}

function removeSelectedFile() {
    selectedFile = null;
    document.getElementById('file-selected').classList.add('hidden');
    document.getElementById('drop-zone').classList.remove('hidden');
}

function submitUpload() {
    const title = document.getElementById('upload-title').value || "Untitled JCB Dig";
    
    const newVideo = {
        id: Date.now(),
        title: title,
        uploader: "MikeDigger",
        views: "1.2k",
        time: "just now",
        category: "Excavation",
        thumbnail: "https://picsum.photos/id/160/400/225",
        youtubeId: null,
        duration: "—",
        likes: 1240,
        description: "New upload from the community",
        comments: []
    };
    
    videos.unshift(newVideo);
    closeUploadModal();
    renderVideos();
    
    setTimeout(() => {
        openVideoModal(newVideo, false);
    }, 800);
}

// Profile menu
function showProfileMenu() {
    alert("Profile menu would open here in full version. (Demo)");
}

// Initialize everything
function initializeApp() {
    renderLiveStreams();
    renderVideos();
    
    // Make category buttons work
    document.querySelectorAll('.category-pill').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active', 'border-orange-500'));
            this.classList.add('active', 'border-orange-500');
            currentFilter = this.innerText === 'All' ? 'all' : this.innerText;
            renderVideos();
        });
    });
    
    console.log('%c[Peak Male Content] Full detailed project initialized.', 'color:#f97316');
}

window.onload = initializeApp;