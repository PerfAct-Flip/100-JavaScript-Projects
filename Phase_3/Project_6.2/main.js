"use strict"
// Create an array of book objects and list all book titles.

let bookList =
[
  {
    "id": "1",
    "title": "How to Stop Time",
    "author": "Matt Haig",
    "price": 499,
    "description": "A fascinating novel about a man who ages extremely slowly and has lived for centuries.",
    "coverImage": "https://res.cloudinary.com/djlsg1msm/image/upload/v1742685993/1_pgctz8.jpg",
    "genres": ["Fantasy", "Science Fiction", "Romance"]
  },
  {
    "id": "2",
    "title": "Cogheart",
    "author": "Peter Bunzl",
    "price": 399,
    "description": "An adventure story set in a steampunk world filled with mechanical wonders.",
    "coverImage": "https://res.cloudinary.com/djlsg1msm/image/upload/v1742685994/2_defk9n.jpg",
    "genres": ["Young Adult", "Steampunk", "Adventure"]
  },
  {
    "id": "3",
    "title": "Looking for Alaska",
    "author": "John Green",
    "price": 450,
    "description": "A coming-of-age novel that explores love, friendship, and the search for meaning.",
    "coverImage": "https://res.cloudinary.com/djlsg1msm/image/upload/v1742685992/3_iyzvdy.jpg",
    "genres": ["Young Adult", "Contemporary", "Romance"]
  },
  {
    "id": "4",
    "title": "Charles Dickens: Four Great Novels",
    "author": "Charles Dickens",
    "price": 999,
    "description": "A collection of four timeless novels from the legendary author Charles Dickens.",
    "coverImage": "https://res.cloudinary.com/djlsg1msm/image/upload/v1742685992/4_xkvoy8.jpg",
    "genres": ["Classics", "Historical Fiction", "Literary Fiction"]
  },
  {
    "id": "5",
    "title": "Gulliver’s Travels",
    "author": "Jonathan Swift",
    "price": 349,
    "description": "A satirical travelogue that critiques society through the adventures of Lemuel Gulliver.",
    "coverImage": "https://res.cloudinary.com/djlsg1msm/image/upload/v1742685991/5_kigrsx.jpg",
    "genres": ["Classics", "Satire", "Adventure"]
  },
  {
    "id": "6",
    "title": "Matilda",
    "author": "Roald Dahl",
    "price": 399,
    "description": "A beloved children’s book about a genius girl with extraordinary powers.",
    "coverImage": "https://res.cloudinary.com/djlsg1msm/image/upload/v1742685992/6_ruuo8c.jpg",
    "genres": ["Children's", "Fantasy", "Humor"]
  },
  {
    "id": "7",
    "title": "The Story of My Life",
    "author": "Helen Keller",
    "price": 299,
    "description": "An inspiring autobiography of Helen Keller and her journey of overcoming challenges.",
    "coverImage": "https://res.cloudinary.com/djlsg1msm/image/upload/v1742685995/7_d1xqpw.jpg",
    "genres": ["Autobiography", "Memoir", "Non-fiction"]
  },
  {
    "id": "8",
    "title": "The Journey of Rock: Four Days One Dream One Stage",
    "author": "Unknown",
    "price": 599,
    "description": "A music-related book capturing the essence of rock concerts and the journey of musicians.",
    "coverImage": "https://res.cloudinary.com/djlsg1msm/image/upload/v1742685995/8_sezusm.jpg",
    "genres": ["Music", "Non-fiction", "Entertainment"]
  },
  {
    "id": "9",
    "title": "The Echo Man",
    "author": "Richard Montanari",
    "price": 499,
    "description": "A gripping thriller featuring a detective chasing a ruthless serial killer.",
    "coverImage": "https://res.cloudinary.com/djlsg1msm/image/upload/v1742685995/9_bd9qrv.jpg",
    "genres": ["Thriller", "Mystery", "Crime"]
  },
  {
    "id": "10",
    "title": "The Untouchable",
    "author": "Gerald Seymour",
    "price": 550,
    "description": "An intense thriller exploring crime, justice, and the cost of doing the right thing.",
    "coverImage": "https://res.cloudinary.com/djlsg1msm/image/upload/v1742685995/10_juutpd.jpg",
    "genres": ["Thriller", "Crime", "Suspense"]
  }
]

bookList.forEach( (e,index) => {
    
    console.log(`Title ${index}: ${e.title}`);
});