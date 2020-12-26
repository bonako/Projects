    // credit = "https://www.youtube.com/watch?v=mImKuPB0xno"

    // Get elements
    var uploader = document.getElementById('uploader');
    var fileButton = document.getElementById('fileButton');

    fileButton.addEventListener('change', function (e) {
        // Get file
        var file = e.target.files[0];

        // Create a storage ref
        var storageRef = firebase.storage().ref("side_scrolling_games/" + file.name);
        // Upload file
        var task = storageRef.put(file);

        // Update progress bar
        task.on('state_changed',
            function progress(snapshot) {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = percentage;
            },
            function error(err) {

            },
            function complete() {
                alert("Success!")
                location.reload()
            }
        );
    })

    // Create a reference under which you want to list
    var listRef = firebase.storage().ref("side_scrolling_games/");

    // Find all the prefixes and items.
    listRef.listAll().then(function (res) {
        res.prefixes.forEach(function (folderRef) {
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
        });
        res.items.forEach(function (itemRef) {
            // All the items under listRef.
            // Create a reference to the file we want to download
            var starsRef = firebase.storage().ref().child(itemRef.location.path);

            // Get the download URL
            starsRef.getDownloadURL().then(function (url) {
                // Insert url into an <img> tag to "download"
                const p = document.createElement('a');
                p.textContent = itemRef.location.path;
                p.classList.add('col-lg-12');
                p.href = url;
                document.getElementById('bar').appendChild(p);
                document.getElementById('bar').innerHTML += '<br />'
            }).catch(function (error) {

                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/object-not-found':
                        // File doesn't exist
                        break;

                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;

                    case 'storage/canceled':
                        // User canceled the upload
                        break;


                    case 'storage/unknown':
                        // Unknown error occurred, inspect the server response
                        break;
                }
            });


        });
    }).catch(function (error) {
        // Uh-oh, an error occurred!
    });