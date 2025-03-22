import dataStories from '../../data/Banners.json';
import Stories from 'react-insta-stories';


function StoriesInsta( {filter} ) { 
    // filtra os slides com base na categoria
    const filteredCategory = dataStories.filter( storie => storie.category === filter);

    const transformStories = (data) => {
        return data.map(item => ({
          url: item.url, // URL da imagem
          header: {
            heading: item.header,
            subheading: item.text,
          },
          storyContent: () => (
            <div>
              <p/>
            </div>
          )
        }));
    };

    const customStoryStyles = {
      display: 'flex',
      width: '100%',
      height: '100%',
      maxWidth: '400px',
      maxHeight: '100vh',
      zIndex: '0'
    };

    const transformedStories = transformStories(filteredCategory);

    return (
        <div>
            <Stories
                stories={transformedStories}
                defaultInterval={5000}
                width="100%"
                height="100%"
                loop
                storyStyles={customStoryStyles}
            />
        </div>
      );
}
export default StoriesInsta;