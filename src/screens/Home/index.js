/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(
    [
      {
        year: '20-10-1800',
        url: 'https://images.unsplash.com/photo-1450631835004-9b95ff5cd66f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
        content: 'First enrolled in a traditionalreligious school, he soon switched to a modern school. In 1893, he entered a military highschool where his mathematics teacher gave him the second name Kemal (meaning perfection)in recognition of young Mustafa\'s superior achievement.',
      },
      {
        year: '20-10-1810',
        url: 'https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2329&q=80',
        content: 'First enrolled in a traditionalreligious school, he soon switched to a modern school. In 1893, he entered a military highschool where his mathematics teacher gave him the second name Kemal (meaning perfection)in recognition of young Mustafa\'s superior achievement.',
      },
      {
        year: '20-10-1820',
        url: 'https://images.unsplash.com/photo-1547845178-f8fc8f77f873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3912&q=80',
        content: 'First enrolled in a traditionalreligious school, he soon switched to a modern school. In 1893, he entered a military highschool where his mathematics teacher gave him the second name Kemal (meaning perfection)in recognition of young Mustafa\'s superior achievement.',
      },
      {
        year: '20-10-1830',
        url: 'https://images.unsplash.com/photo-1604335963028-e7fbb6a85844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
        content: 'First enrolled in a traditionalreligious school, he soon switched to a modern school. In 1893, he entered a military highschool where his mathematics teacher gave him the second name Kemal (meaning perfection)in recognition of young Mustafa\'s superior achievement.',
      },
      {
        year: '20-10-1850',
        url: 'https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2329&q=80',
        content: 'First enrolled in a traditionalreligious school, he soon switched to a modern school. In 1893, he entered a military highschool where his mathematics teacher gave him the second name Kemal (meaning perfection)in recognition of young Mustafa\'s superior achievement.',
      },
      {
        year: '20-10-1870',
        url: 'https://images.unsplash.com/photo-1604335963028-e7fbb6a85844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
        content: 'First enrolled in a traditionalreligious school, he soon switched to a modern school. In 1893, he entered a military highschool where his mathematics teacher gave him the second name Kemal (meaning perfection)in recognition of young Mustafa\'s superior achievement.',
      },

    ],
  );

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll);
  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // }, []);

  return (<Redirect to='/login'/>);

  // const onScroll = () => {
  //   const items = document.getElementsByClassName('time_line__item');
  //   const scrollTop = window.pageYOffset;
  //   const timeline = document.getElementById('app');
  //   [...items].forEach((element) => {
  //     const height = element.offsetHeight;
  //     const min = element.offsetTop + 30;
  //     const max = min + height;
  //     if (scrollTop >= min && scrollTop < max) {
  //       element.classList.add('time_line__item__active');
  //       const url = element.getElementsByTagName('img')[0].currentSrc;
  //       timeline.style.backgroundImage = `url(${url})`;
  //     } else {
  //       element.classList.remove('time_line__item__active');
  //     }
  //   });
  // };

  // return (
  //   <div className="App py-10" id='app'>
  //     <div className=" flex items-center flex-col">
  //       <h1 className="text-5xl text-center z-10 text-white">Mustafa Kemal Atatürk</h1>
  //       <h2 className="text-3xl text-center mt-4 z-10 text-white">
  //       FATHER OF THE TURKS
  //       </h2>
  //       <div id="timeline-container">
  //         <div className="time_line mt-20" id="timeline">
  //           {
  //             data.map((item, index) => (
  //               <div key={item.url + index} className="time_line__item" data-text='FATHER OF THE TURKS'>
  //                 <div>
  //                   <img className="rounded-md" src={item.url} alt={item.year}/>
  //                   <h3 className='text-white'>
  //                     {item.year}
  //                   </h3>
  //                   <div className='text-white description'>
  //                     {item.content}
  //                   </div>
  //                 </div>
  //               </div>
  //             ))
  //           }
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Home;
