import React from 'react';
import '../styles/Card.css';

const Card = ({ ticket, user }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && (
          <div className="user-avatar">
            <img src={user.avatar} alt={user.name} />
          </div>
        )}
      </div>
      <div className="card-title">{ticket.title}</div>
      <div className="card-tags">
        <span className="priority-tag">
          {ticket.priority === 4 && '⚡ Urgent'}
          {ticket.priority === 3 && '🔴 High'}
          {ticket.priority === 2 && '🟡 Medium'}
          {ticket.priority === 1 && '🟢 Low'}
          {ticket.priority === 0 && '⚪ No priority'}
        </span>
        {ticket.tag && (
          <span className="feature-tag">
            <span className="dot">•</span>
            {ticket.tag}
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;