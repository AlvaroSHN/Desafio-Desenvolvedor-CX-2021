db.movies.aggregate([
  { $unwind: "$cast" },
  { $match: { languages: { $in: ["English"] } } },
  {
    $group: {
      _id: "$cast",
      numeroFilmes: { $sum: 1 },
      mediaIMDB: { $avg: "$imdb.rating" },
    },
  },
  {
    $project: {
      _id: 1,
      numeroFilmes: 1,
      mediaIMDB: { $round: [{ $avg: "$mediaIMDB" }, 1] },
    },
  },
  { $sort: { numeroFilmes: -1, _id: -1 } },
]);
