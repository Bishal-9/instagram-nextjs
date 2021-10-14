import Post from "./Post"

const dummy_data = [
    {
        id: 12,
        username: 'everef',
        userImg: 'https://www.nicepng.com/png/full/780-7805650_generic-user-image-male-man-cartoon-no-eyes.png',
        img: 'https://adscode.com/wp-content/uploads/2018/08/Blog-Post-Social-Media-Marketing1-1.png',
        caption: 'Kuch bhivdsvsdsvsdvsdvsdvsdvsdzxccbfdnnnyhfg,yhf'
    },
    {
        id: 12,
        username: 'everef',
        userImg: 'https://www.nicepng.com/png/full/780-7805650_generic-user-image-male-man-cartoon-no-eyes.png',
        img: 'https://adscode.com/wp-content/uploads/2018/08/Blog-Post-Social-Media-Marketing1-1.png',
        caption: 'Kuch bhi'
    },
    {
        id: 12,
        username: 'everef',
        userImg: 'https://www.nicepng.com/png/full/780-7805650_generic-user-image-male-man-cartoon-no-eyes.png',
        img: 'https://adscode.com/wp-content/uploads/2018/08/Blog-Post-Social-Media-Marketing1-1.png',
        caption: 'Kuch bhi'
    }
]

function Posts() {
    return (
        <div>
            {
                dummy_data.map(post => (
                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        userImg={post.userImg}
                        img={post.img}
                        caption={post.caption}
                    />
                ))
            }
        </div>
    )
}

export default Posts
