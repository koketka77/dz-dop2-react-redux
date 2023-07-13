import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from 'react-router-dom'
import React from 'react';

const Posts = () => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()


    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    console.log(users);

    return (
        <div className='main'>
            {loading ? 'loading...' : users?.map((el) => {

                return (
                    <div className="oneuser">
                        <div>
                            <h1>{el.id}</h1>
                            <h2>{el.title}</h2>
                            <p>{el.body.length > 20 ? <><span>{el.body.substr(0, 20)}</span><Link to={`/posts/${el.id}`}> more..</Link></> : el.body}</p>
                        </div>
                        <div className="buttonOnUser"><Link to={`/posts/${el.id}`}><button >details</button></Link></div>
                    </div>
                )

            })

            }
        </div>
    );
}

export default Posts;
