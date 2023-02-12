import React from 'react';
import { useLoaderData } from 'react-router';
import NewsSummaryCard from '../../shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            {
                categoryNews.map(news => <NewsSummaryCard
                    key = {news._id}
                    news = {news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;