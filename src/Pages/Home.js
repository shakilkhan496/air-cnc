import { CalendarIcon } from '@heroicons/react/20/solid';
import React, { useEffect, useState } from 'react';
import PrimaryButton from '../Components/Button/PrimaryButton';
import DatePicker from 'react-datepicker'
import SearchForm from '../Components/Form/SearchForm';
import HomeCard from '../Components/Card/HomeCard';
import ExpCard from '../Components/Card/ExpCard';
import { Link } from 'react-router-dom';


const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allExpData, setAllExpData] = useState([]);
  useEffect(() => {
    fetch('expdata.json')
      .then(res => res.json())
      .then(data =>
        setAllExpData(data)
      )
  }, [])
  return (
    <div className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20'>
      <div className=''>
        <div className='mt-4'>
          <SearchForm></SearchForm>
        </div>
      </div>
      <div className='flex-1'>
        <div>
          <div className=' flex items-center justify-between'>
            <p className='text-xl font-bold'>Homes</p>
            <Link to='/comingSoon'>See All</Link>
          </div>
          <div className='lg:flex container md:flex flex-wrap justify-between'>
            {
              [...Array(5)].map((exp, idx) =>
                <HomeCard exp={exp} key={idx}></HomeCard>
              )
            }
          </div>
        </div>
        <div className='space-y-10 mt-10'>
          <div className=' flex items-center justify-between'>
            <p className='text-xl font-bold'>Experiences</p>
            <Link to='/comingSoon'>See All</Link>
          </div>
          <div className='lg:flex container md:flex justify-between'>
            {
              allExpData.slice(0, 4).map((exp, idx) =>
                <ExpCard exp={exp} key={idx}></ExpCard>
              )
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
