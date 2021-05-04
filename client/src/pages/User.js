import EventCard from '../components/EventCard_User';
import styled from 'styled-components';
import React from 'react';

const data = [
  { gameType: true, creatorName: 'Eason', startTime: new Date(), participants: ['A', 'B', 'C', 'D'], maxParticipants: 8, title: '《古木吟》', price: 80, location: '八宝坑35号', distance: 300 },
  { gameType: false, creatorName: 'Bobby', participants: ['A', 'B', 'C', 'D', 'E'], maxParticipants: 5, title: '狼人杀局', price: 60, location: '八宝坑29号', distance: 200 },
  /*{ title: 'Title 3', fee: 20 },
  { title: 'Title 4', fee: 800 },
  { title: 'Title 5', fee: 400 },*/
];

const userName = 'Eason';
const userGender = true;

const UserInfoContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function User() {
  let avatarPath = '';
  if(userGender == true){
    avatarPath = 'imgs/avatar_male.png';
  }
  else{
    avatarPath = 'imgs/avatar_female.png';
  }

  return (
    <div>
      <div style={{width: '100%', height: '50px', border: 'solid 0.5px #f0f0f0'}}></div>

      <UserInfoContainer>
        <img src={avatarPath} style={{width: '70px', height: '70px', margin: '10px'}}></img>
      </UserInfoContainer>
      <UserInfoContainer>
        <span style={{fontSize: '18px'}}><strong>{userName}</strong></span>
      </UserInfoContainer>
      <UserInfoContainer style={{marginTop: '15px'}}>
          <img src='src/pages/编辑.png' alt='' />
          <button
            style={{ border: 'transparent', backgroundColor: '#eff0fe', width: '65px', height: '21px', borderRadius: '10.5px' }}
          >
            <img src='imgs/edit.png' style={{width: '10px', height: '10px'}}/>
            <span style={{fontSize: '10px'}}>编辑资料</span>
          </button>
      </UserInfoContainer>
      <UserInfoContainer style={{marginTop: '20px'}}>
        <span style={{fontSize: '14px'}}><strong>我的活动</strong></span>
      </UserInfoContainer>
      
      <div>
        {data.map((card) => (
          <EventCard card={card} />
        ))}
      </div>
    </div>
  );
}
