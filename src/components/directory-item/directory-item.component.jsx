import {Body, BackgroundImage, DirectoryItemContainer} from './directory-item.styles'

import React from 'react';
import {useNavigate} from "react-router-dom";

const DirectoryItem = ({category}) => {
    const {title, imageUrl, route} = category;

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
 // navigate(`shop/${title}`);
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl = {imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
