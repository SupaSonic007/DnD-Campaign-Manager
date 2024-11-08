"use client";
import "./styles.css";

import { searchLikeUsers } from "@/utils/helpers/userHelpers";
import { useEffect, useState } from "react";

export default function Page() {
    const [username, setUsername] = useState("");
    const [users, setUsers] = useState<{ name: string; id: string }[]>([]);
    const [authUsers, setAuthUsers] = useState<{ name: string; id: string }[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = await searchLikeUsers(username);
            setUsers(fetchedUsers);
        };

        fetchUsers();
    }, [username]);

    const handleAuthUsers = (user:{ name: string; id: string }) => {
        if (authUsers.includes(user)) {
            setAuthUsers(authUsers.splice(authUsers.indexOf(user), 1))
            console.log("yes")
            console.log(authUsers)
        }
        else {
            setAuthUsers(authUsers.concat([user]))
            console.log("no")
            console.log(authUsers)
        }
    }

    return (
        <main>
            <h1>Create Campaign</h1>
            <div>
                <form>
                    <label htmlFor="campaign_name">
                        <b>
                            Name<span className="req">*</span>:
                        </b>
                    </label>
                    <br />
                    <input
                        id="campaign_name"
                        type="text"
                        placeholder="Campaign Name"
                    ></input>
                    <br />
                    <br />
                    <label htmlFor="campaign_description">
                        <b>Desc:</b>
                    </label>
                    <br />
                    <br />
                    <label htmlFor="campaign_private">
                        <b>
                            Private<span className="req">*</span>:{" "}
                        </b>
                    </label>
                    <input
                        id="campaign_private"
                        type="checkbox"
                        defaultChecked
                    ></input>
                </form>
                <br />
                <br />
                <form>
                    <label htmlFor="username">
                        <b>Authorised users:</b>
                    </label>
                    <br />
                    <input
                        type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    {users.length > 0
                        ? (users.map((user) => (
                              <>
                                  <br />
                                  <input
                                      name={user.id}
                                      key={user.id}
                                      type="checkbox"
                                      value={user.name}
                                      checked={authUsers.includes(user)}
                                      onClick={(e) => handleAuthUsers(user)}
                                      readOnly
                                  />
                                  <label htmlFor={user.id}>{user.name}</label>
                                  <br />
                              </>
                          ))
                        )
                        : null}
                </form>
                <b></b>
                <br />
            </div>
        </main>
    );
}
