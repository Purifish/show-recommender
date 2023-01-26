import { StarFill, StarHalf, Star as StarEmpty} from "react-bootstrap-icons"; // npm i react-bootstrap-icons

function StarRating(props) {
    const rating = props.rating;
    let starList = [];

    const filledStars = Math.floor(rating);

    const hasHalfStar = (rating - Math.floor(rating)) >= 0.5;

    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < filledStars; i++) {
        starList.push(<StarFill key={"star-fill" + i}/>);
    }

    if (hasHalfStar) {
        starList.push(<StarHalf key={"star-half0"}/>);
    }

    for (let i = 0; i < emptyStars; i++) {
        starList.push(<StarEmpty key={"star-empty" + i}/>);
    }

    return (
        <>
            {starList}
        </>
    );
}

export default StarRating;
