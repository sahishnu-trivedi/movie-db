import { useEffect, useState } from "react"
import { fetchTrendingList } from "../../helpers/fetchData";
import Banner from "../Banner/Banner";
import MovieSlider from "../../components/MovieSlider";

export default function Trending () {
    const [trendingList, setTrendingList] = useState([]);

    const fetchTrendingData = async () => {
        fetchTrendingList().then(res => res.json())
        .then(data => setTrendingList(data.results))
        .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchTrendingData();
    }, [])
    return(
        <div className='pb-4'>
            {trendingList.length > 0 && 
            <>
                <Banner content={trendingList[0]} />
                <MovieSlider slides={trendingList} />
            </>
            }
        </div>
    )
}