// posts in grid format on articles page
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Home.module.css'
import Image from "next/image";

function ArticleGrid({title, date, description, imageUrl, slug}) {
    return (
        <Link href={"/posts/" + slug} className={styles.card} target="_blank" rel="noopener noreferrer">
            {imageUrl && (
                <Image
                  alt="presentation"
                  src={imageUrl}
                  width="350"
                  height="200"
                />
              )}
              <div> 
                <h3> {title} </h3>
                <p> {description} </p>
                <h4> {date} </h4>
              </div>
        </Link>
        
    )
}

export default ArticleGrid
