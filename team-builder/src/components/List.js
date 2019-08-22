import React from 'react';

const List = props => {
    return (
        <div>
            {props.members.length > 0 ? props.members.map(member => (
                <div className='member'>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))
            :
            null
            }
        </div>
    )
}

export default List;