import React, {useRef, useState} from 'react';
import {Card, CardMedia, Container} from '@mui/material';
import {styled} from '@mui/system';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

interface Image {
    title: string;
    imageUrl: string;
}

const PrevButton = styled(NavigateBeforeIcon)({
    display: 'flex',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: '50%',
    cursor: 'pointer',
    top: '50%',
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',

    }
});

const NextButton = styled(NavigateNextIcon)({
    display: 'flex',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    borderRadius: '50%',
    cursor: 'pointer',
    top: '50%',
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
});

const IndicatorsContainer = styled('div')({
    position: 'absolute',
    bottom: '10px',
    display: 'flex',
    width: '100px',

})

const Indicator = styled('div')({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
    margin: '0 5px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
});

const images: Image[] = [
    {
        title: 'Image 1',
        imageUrl: 'https://source.unsplash.com/random/300x200',
    },
    {
        title: 'Image 2',
        imageUrl: 'https://source.unsplash.com/random/300x201',
    },
    {
        title: 'Image 3',
        imageUrl: 'https://source.unsplash.com/random/300x202',
    },
    {
        title: 'Image 4',
        imageUrl: 'https://source.unsplash.com/random/300x203',
    },
];

const CarouselGallery: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    
    const handlePrevClick = () => {
        setActiveIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
    const handleNextClick = () => {
        setActiveIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    const handleIndicatorClick = (index: number) => {
        setActiveIndex(index);
    }

    return (
        <div style={{position: 'relative'}}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)} >
            <CardMedia
                component="img"
                image={images[activeIndex].imageUrl}
                title={images[activeIndex].title}
            />

            {isHovered &&
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <IndicatorsContainer>
                        {images.map((_, index) => (
                            <Indicator
                                style={{backgroundColor: index === activeIndex ? 'white' : 'rgba(255, 255, 255, 0.5)'}}
                                onClick={() => handleIndicatorClick(index)}
                            />
                        ))}
                    </IndicatorsContainer>
                    <PrevButton onClick={handlePrevClick}/>
                    <NextButton onClick={handleNextClick}/>
                </div>
            }
        </div>
    );
};

export default CarouselGallery;
