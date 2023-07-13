import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom'


const PostsDetails = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const location = useLocation()
    const navigate = useNavigate()


    const onBackClick = () => {

        navigate(location.state?.from || '/')
    }
    useEffect(() => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => { setUser(data); console.log(data); })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))

    }, [])
    return (
        <div>
            {loading ? 'loading...' :
                <div className='user'>
                    <button onClick={onBackClick}>back</button>

                    <h1>{user?.id}</h1>
                    <h2>{user?.title}</h2>
                    <p>{user?.body}</p>
                </div>
            }

        </div>
    );
}

export default PostsDetails;
