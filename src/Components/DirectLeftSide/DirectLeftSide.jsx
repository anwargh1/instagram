import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { PiNotePencilBold } from 'react-icons/pi';
import './directLeftSide.css';
import MessagesBoxItem from '../MessagesBoxItem/MessagesBoxItem';

const directMessages = [
  {
    id: 1,
    name: 'Alice Johnson',
    profile_img: 'https://example.com/profiles/alice.jpg',
    last_message: "How's it going?",
    date_last_message: 2, 
  },
  {
    id: 2,
    name: 'Bob Smith',
    profile_img: 'https://example.com/profiles/bob.jpg',
    last_message: "I'm good, thanks!",
    date_last_message: 1, 
  },
  {
    id: 3,
    name: 'Charlie Brown',
    profile_img: 'https://example.com/profiles/charlie.jpg',
    last_message: 'Hello there!',
    date_last_message: 3, 
  },
  {
    id: 4,
    name: 'David Miller',
    profile_img: 'https://example.com/profiles/david.jpg',
    last_message: 'Hi David!',
    date_last_message: 5,
  },
  {
    id: 5,
    name: 'Emily Davis',
    profile_img: 'https://example.com/profiles/emily.jpg',
    last_message: "Hey, what's up?",
    date_last_message: 1, 
  },
  {
    id: 6,
    name: 'Frank Wilson',
    profile_img: 'https://example.com/profiles/frank.jpg',
    last_message: 'Not much, just working.',
    date_last_message: 4, 
  },
  {
    id: 7,
    name: 'Grace Taylor',
    profile_img: 'https://example.com/profiles/grace.jpg',
    last_message: 'Good morning!',
    date_last_message: 2,
  },
  {
    id: 8,
    name: 'Hannah Martinez',
    profile_img: 'https://example.com/profiles/hannah.jpg',
    last_message: 'Hello Hannah!',
    date_last_message: 6, 
  },
  {
    id: 9,
    name: 'Isaac Lee',
    profile_img: 'https://example.com/profiles/isaac.jpg',
    last_message: 'Hey, long time no see!',
    date_last_message: 7, 
  },
  {
    id: 10,
    name: 'Jane Adams',
    profile_img: 'https://example.com/profiles/jane.jpg',
    last_message: 'Hi Jane!',
    date_last_message: 3, 
  },
];
const DirectLeftSide = () => {


  return (
    <div className="direct-left-side">
      <div className="top">
        <div className="top-flex">
          <div className="user-name-account">
            <h3>anwar.gh</h3>
            <BsChevronDown className="account-icon" />
          </div>
          <PiNotePencilBold className="create-message-icon" />
        </div>

        <div className="direct-interactions">
          <p>Primary</p>
          <p>General</p>
          <p>Requests(4)</p>
        </div>
      </div>

      <div className="messages-box">
        {directMessages.map(message => (
          <MessagesBoxItem props={message} key={message.id} />
        ))}
      </div>
    </div>
  );
};

export default DirectLeftSide;
