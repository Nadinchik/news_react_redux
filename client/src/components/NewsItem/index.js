import React from 'react';

const newsItem = ({item}) => {
    console.log('item--->', item);
    return (
        <li>
            <div className="card">
                <div className="card-header">
                    {item.title}
                </div>
                <div className="card-body">
                    <section className="card-text">{item.text}</section>
                    <div>
                        {item.author}
                    </div>
                    <h6 className="card-subtitle text-muted">
                        creation date: {item.date}
                    </h6>
                </div>
            </div>
        </li>
    )
};

export default newsItem;