const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
]

$(document).ready(function () {
    $(`#post-btn`).on(`click`, function () {
        if ($(`#name-input`).val() && $(`#post-input`).val()) {
            posts.push({name: $(`#name-input`).val(), text: $(`#post-input`).val()});
            render();
        }

        $(`#name-input`).val(``);
        $(`#post-input`).val(``);
    });

    function render() {
        let postsList = $(`#posts-list`);

        if (postsList.length === 0) {
            postsList = $(`<div id="posts-list"></div>`);
            $(`body`).append(postsList);
        }

        postsList.empty();

        posts.forEach(function (post, index) {
            const newPost = $("<div></div>");
            newPost.html(`<strong>${post.name}:</strong> ${post.text}`);
            postsList.append(newPost);

            newPost.on("click", function () {
                posts.splice(index, 1);
                render();
            });
        });
    }

    render();
});


