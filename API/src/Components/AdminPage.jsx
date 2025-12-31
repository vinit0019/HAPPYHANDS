import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Colection from './Colection'

const AdminPage = () => {

    let [users, setusers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/admin")
            .then((res) => {
                alert(res.data.message)
                setusers(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">

            <h1 className="text-3xl font-bold mb-6 text-blue-400">
                Admin Page
            </h1>

            {
                users.length === 0 ? (
                    <p className="text-gray-400 animate-pulse">
                        Loading....!
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {users.map((e, i) => (
                            <div
                                key={i}
                                className="bg-gray-800 rounded-xl p-5 shadow-lg
                                           hover:shadow-blue-500/20 transition"
                            >
                                <h3 className="text-xl font-semibold text-blue-300">
                                    {e.name}
                                </h3>
                                <p className="text-gray-300 mt-1">
                                    {e.email}
                                </p>
                                <p className="mt-2 inline-block px-3 py-1
                                              text-sm rounded-full
                                              bg-blue-500/20 text-blue-400">
                                    Role : {e.role}
                                </p>
                            </div>
                        ))}
                    </div>
                )
            }

            <div className="mt-10">
                <Colection />
            </div>

        </div>
    )
}

export default AdminPage
