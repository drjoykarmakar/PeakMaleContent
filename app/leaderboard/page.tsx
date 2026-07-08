'use client';

export default function LeaderboardPage() {
  const leaders = [
    { rank: 1, name: "DigMaster42", videos: 87, views: "14.2M", earnings: "$8,420" },
    { rank: 2, name: "YellowIronFan", videos: 64, views: "11.8M", earnings: "$6,190" },
    { rank: 3, name: "SiteKing88", videos: 51, views: "9.4M", earnings: "$4,872" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-6xl font-black mb-8">Top Operators This Week</h1>
      
      <div className="space-y-4">
        {leaders.map((leader, index) => (
          <div key={index} className="bg-zinc-900 border border-zinc-700 rounded-3xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-x-6">
              <div className="text-5xl font-black text-orange-400 w-16">#{leader.rank}</div>
              <div>
                <div className="font-extrabold text-2xl">{leader.name}</div>
                <div className="text-sm text-zinc-400">{leader.videos} videos • {leader.views} views</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-emerald-400 font-mono text-2xl font-bold">{leader.earnings}</div>
              <div className="text-xs text-zinc-400">earnings this month</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
