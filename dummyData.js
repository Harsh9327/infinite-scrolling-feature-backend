const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
   
});

const postSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    description: String,
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

const dummyPosts = [
    {
        title: "Beautiful Sunrise",
        imageUrl: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
        description: "Captured this beautiful sunrise at the beach."
    },
    {
        title: "Mountain Adventure",
        imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        description: "An unforgettable adventure in the mountains."
    },
    {
        title: "City Lights",
        imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        description: "The city comes alive at night."
    },
    {
        title: "Desert Journey",
        imageUrl: "https://images.unsplash.com/photo-1494972308805-463bc619d34e",
        description: "A journey through the vast desert."
    },
    {
        title: "Tropical Paradise",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        description: "Relaxing in a tropical paradise."
    },
    {
        title: "Snowy Mountains",
        imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        description: "Snow-covered peaks as far as the eye can see."
    },
    {
        title: "Autumn Leaves",
        imageUrl: "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f",
        description: "The beauty of autumn in full bloom."
    },
    {
        title: "Urban Jungle",
        imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
        description: "Exploring the urban jungle."
    },
    {
        title: "Serene Lake",
        imageUrl: "https://images.unsplash.com/photo-1473643068424-cd2485c53c74",
        description: "A serene lake surrounded by mountains."
    },
    {
        title: "Forest Trail",
        imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
        description: "Hiking through a dense forest trail."
    },
    {
        title: "Desert Sunset",
        imageUrl: "https://images.unsplash.com/photo-1473643068424-cd2485c53c74",
        description: "Watching the sunset over the desert."
    },
    {
        title: "Cityscape",
        imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        description: "The cityscape at dusk."
    },
    {
        title: "Riverside Picnic",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        description: "A relaxing picnic by the river."
    },
    {
        title: "Beach Vibes",
        imageUrl: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
        description: "Feeling the beach vibes."
    },
    {
        title: "Mountain Climb",
        imageUrl: "https://images.unsplash.com/photo-1494972308805-463bc619d34e",
        description: "Climbing the mountain."
    },
    {
        title: "Morning Dew",
        imageUrl: "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f",
        description: "The freshness of morning dew."
    },
    {
        title: "Urban Exploration",
        imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
        description: "Exploring the city's hidden gems."
    },
    {
        title: "Calm Waters",
        imageUrl: "https://images.unsplash.com/photo-1473643068424-cd2485c53c74",
        description: "The calm waters of a secluded beach."
    },
    {
        title: "Autumn Walk",
        imageUrl: "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f",
        description: "Walking through the autumn leaves."
    },
    {
        title: "Sunset Boulevard",
        imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        description: "The sun setting on a busy boulevard."
    },
    {
        title: "Nature's Beauty",
        imageUrl: "https://images.unsplash.com/photo-1473643068424-cd2485c53c74",
        description: "Nature at its finest."
    },
    {
        title: "Mountain Reflection",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        description: "The mountains reflecting in the lake."
    },
];

Post.insertMany(dummyPosts)
    .then(() => {
        console.log("Dummy data inserted!");
        mongoose.connection.close();
    })
    .catch(err => {
        console.error("Error inserting dummy data:", err);
    });
