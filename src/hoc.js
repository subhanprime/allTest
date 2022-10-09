import React, { useState, useEffect } from 'react'
function Hoc(OriginalComponent, intent) {
    function NewCompnent(props) {
        const [count, setCount] = useState(0);
        const [users, setUsers] = useState([]);
        const [term, setterms] = useState([]);
        const incremet = () => setCount(count + 1);
        const fetchUser = async () => {
            fetch(`https://jsonplaceholder.typicode.com/${intent}`).then(res => res.json())
                .then(data => setUsers(data))
                .catch(error => console.log(error))
        }
        useEffect(() => {
            fetchUser();
        }, [])


        let userList = users.filter(el => {
            if (term != '') {
                if (intent= 'users') {
                    if (el.name.indexOf(term) > 0) {
                        console.log(el);
                        return el
                    }
                }else{
                    if (el.title.indexOf(term) > 0) {
                        console.log(el);
                        return el
                    } 
                }
            }
            else
                return el;
        }).map((el, ind) => {
            return (
                <p key={el.id}>{ind + 1} {el?.name}{ el?.title}</p>
            );
        });


        return <OriginalComponent name="subhan ali" count={count} incremet={incremet} intent={intent} userList={userList} />
    }
    return NewCompnent;
}
export default Hoc;