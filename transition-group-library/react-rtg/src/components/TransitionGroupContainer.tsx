import React from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import '../styles/transitiongroup.css';

export function TodoList() {
  const [items, setItems] = React.useState([
    { id: Math.floor(Math.random() * 1000000), text: 'Buy eggs' },
    { id: Math.floor(Math.random() * 1000000), text: 'Pay bills' },
    { id: Math.floor(Math.random() * 1000000), text: 'Invite friends over' },
    { id: Math.floor(Math.random() * 1000000), text: 'Fix the TV' },
  ]);
  return (
    <div style={{ marginTop: '2rem', display: 'flex', flexFlow: 'column' }}>
      <ul style={{ marginBottom: '1rem' }}>
        <TransitionGroup className="todo-list">
          {items.map(({ id, text }) => (
            <CSSTransition
              key={id}
              timeout={500}
              classNames="item"
            >
              <li>
                <button
                  className="remove-btn"
                  onClick={() =>
                    setItems(items =>
                      items.filter(item => item.id !== id)
                    )
                  }
                >
                  &times;
                </button>
                {text}
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
      <button
        onClick={() => {
          const text = prompt('Enter some text');
          if (text) {
            setItems(items => [
              ...items,
              { id: Math.floor(Math.random() * 1000000), text },
            ]);
          }
        }}
      >
        Add Item
      </button>
    </div>
  );
}
