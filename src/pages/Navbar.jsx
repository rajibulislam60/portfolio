import React from 'react';
import Container from '../Components/Container';
import List from '../Components/List';
import ListItem from '../Components/ListItem';
import Button from '../Components/Button';

const Navbar = () => {
  return (
    <>
        <div className=''>
            <Container>
                <div className='flex justify-between items-center pt-3 pb-3'>
                    <h2 className='text-[24px] font-bold'>RI Rajib</h2>
                    <List>
                        <ListItem item="Home"/>
                    </List>
                    <Button className='border bg-orange-600 text-white px-5 py-3 text-[21px] font-medium rounded-md hover:bg-black duration-[0.4s]' name='Contact Us'/>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Navbar