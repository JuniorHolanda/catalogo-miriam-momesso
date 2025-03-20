import styles from './stories.module.scss';
import dataStories from '../../data/Banners.json';
import Stories from 'react-insta-stories';


function StoriesInsta( {filter} ) {
    
    // filtra os slides com base na categoria
    const filteredCategory = dataStories.filter( storie => storie.category === filter);
    console.log(filteredCategory)

    const transformStories = (data) => {
        return data.map(item => ({
          url: item.url, // URL da imagem
          header: {
            heading: item.header,
            subheading: item.category,
          },
          storyContent: () => (
            <div className={styles.content}>
              <p className={styles.text}>{item.text}</p>
            </div>
          )
        }));
    };

    const transformedStories = transformStories(filteredCategory);

    return (
        <div className={styles.container}>
            <Stories
                stories={transformedStories}
                defaultInterval={5000}
                width="100%"
                height="100%"
                loop
            />
        </div>
      );
}
export default StoriesInsta;