"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "@/redux/posts/posts.slice";
import LinkButton from "@/components/molecules/linkButton/linkButton.molecule";
import PostCard from "@/components/molecules/postCard/postCard.molecule";
import Pagination from "@/components/organisms/pagination";
import ButtonGroup from "@/components/molecules/buttonGroup/buttonGroup.molecule";
import handleFilter from "@/utils/handleFilter";
import handleSorting from "@/utils/handleSorting";
import { allPostsData } from "@/api/posts.api";
import Spinner from "@/components/molecules/spinner";

const itemsPerPage = 10;

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState("Month");

  const handlePaginationChange = (e, value) => setPage(value);
  console.log(posts);
  return loading || posts === null ? (
    <Spinner />
  ) : (
    <div className=" flex justify-center text-white my-12">
      <div className="w-8/12  max-w-screen-xl px-4">
        <div className="flex flex justify-between items-center my-8  ">
          <h3 className="text-3xl font-semibold ">Top Questions</h3>
          <div className="">
            <LinkButton
              text={"Ask Question"}
              link={"/add/question"}
              type={"s-btn__primary"}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg">
            {new Intl.NumberFormat("en-IN").format(posts.length)} questions
          </span>
          <div className="">
            <ButtonGroup
              buttons={["Today", "Week", "Month", "Year"]}
              selected={sortType}
              setSelected={setSortType}
            />
          </div>
        </div>
        <div className="mt-8">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
        <Pagination
          page={page}
          itemList={posts}
          itemsPerPage={itemsPerPage}
          handlePaginationChange={handlePaginationChange}
        />
      </div>
    </div>
  );
};

export default HomePage;
