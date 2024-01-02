// ------------------ Daily Challenge : Creating Objects ----------------------

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor(title, uploader, time){
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch() {
        return `${this.uploader} watched all ${this.time} of ${this.title}!`
    }
}

const cuteCats = new Video ('Cute cats', 'User1764', '304')
console.log(cuteCats.watch())

let allVideos = [
    ['Crazy cats', 'User159', '175'],
    ['Singing Husky', 'User56', '285'],
    ['Stypid parrot talks', 'User2740', '59'],
    ['Dark sorest', 'User87', '654'],
    ['How to cook an Olivie salad', 'User1357', '596'],
]


allVideos.forEach((video, index, arr) => {
    let x = new Video (video[0], video[1], video[2])
    arr[index] = x
});

console.log (allVideos)

allVideos.forEach((video) => {
    console.log(video.watch())
})

//or
// let objVideos = allVideos.map (video => new Video (video[0], video[1], video[2]))
// console.log (objVideos)