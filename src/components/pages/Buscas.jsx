import { motion } from 'framer-motion';
import styles from './Buscas.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogFetch from '../configAxios';
import NewPost from './NewPost';


function Buscas() {
    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        try {
            const response = await blogFetch.post("");
            const data = response.data;

            setPosts(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts()

    }, []);

    return (
        <motion.div className={styles.divPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} >
            <div className='homeDiv'>
                    </div>
            
                <NewPost></NewPost>
        </motion.div>
    )
}
export default Buscas;