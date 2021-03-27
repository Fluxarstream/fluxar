const video = document.querySelector("#video")

document.querySelector("#start-video").addEventListener('click', function(e) {
    navigator.getUserMedia(
        {
            video: {}
        },
        stream => video.srcObject = stream,
        err => console.log(err)
    )
})