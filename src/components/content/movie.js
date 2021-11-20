import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Main = styled.div`
    color: white;
    width: 300px;
    text-align: center; 
`;

const Poster = styled.img`
    cursor: pointer;
`;

const Title = styled.h2`
    font-size: 30px;
`;

const Overview = styled.p`
    display: ${(props) => {
        if(props.display) {
            return "inline-block"
        }
        else {
            return "none"
        }
    }};
`;

const AddToWishList = styled.button`
    padding: 5px;
    color: white;
    background-color: red;
    border-radius: 10px;
`;

function MovieObject (props) {
    const[showOverview, setShowOverview] = useState(false);

    useEffect (() => {
        console.log("hah")
    })

    function alternateShowOverview () {
        setShowOverview((prevShowOverview) => !prevShowOverview);
    }


    return (
        <Main>
            <Poster onClick={alternateShowOverview} src={props.posterPath}/>
            <Title>{props.name}</Title>
            <Overview display={showOverview}> {props.overview}</Overview>
            <AddToWishList onClick={() => {props.addToWishList(props.name)}}>Add To Wishlist</AddToWishList>
        </Main>
    )
}

export default MovieObject;