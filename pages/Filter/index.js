import { Button } from "antd";
import antd from "antd";
import { Layout, Breadcrumb, Carousel } from "antd";
import Slider from "react-slick";
var ObjectFitCover = require("react-object-fit-cover");
const { Header, Footer, Sider, Content } = Layout;
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useState } from "react";
import "../../Styles/Filter.less";
import { Example } from "./FilterBtn.js";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import FilterButtons from "../../components/carousel";
const { Card } = antd;
const { Meta } = Card;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};
const fitlerImtes = [
  { title: "Wearables" },
  { title: "Hoodle" },
  { title: "Male T-shirt" },
  { title: "Female T-shirt" },
  { title: "Kids" },
  { title: "Dresses" },
  { title: "Skrits" },
  { title: "Free Size" },
  { title: "Hats" },
  { title: "Bags" },
];
const items = [
  {
    id: "1",
    src: "../static/images/m.jpg",
    size: "M",
    title: "Baghdad",
    color: "Black",
  },
  {
    id: "2",
    src: "../static/images/t1.jpg",
    size: "L",
    title: "Batman",
    color: "red",
  },
  {
    id: "3",
    src: "../static/images/t9.jpg",
    size: "L",
    title: "Baghdad",
    color: "White",
  },
  {
    id: "4",
    src: "../static/images/t7.jpg",
    size: "S",
    title: "WonderWomen",
    color: "Black",
  },
  {
    id: "5",
    src: "../static/images/t6.jpg",
    size: "L",
    title: "Batman",
    color: "red",
  },
  {
    id: "6",
    src: "../static/images/t9.jpg",
    size: "M",
    title: "Baghdad",
    color: "Green",
  },
  {
    id: "7",
    src: "../static/images/m1.webp",
    size: "M",
    title: "Baghdad",
    color: "Black",
  },
  {
    id: "8",
    src: "../static/images/t9.jpg",
    size: "L",
    title: "Batman",
    color: "rded",
  },
  {
    id: "9",
    src: "../static/images/t6.jpg",
    size: "M",
    title: "Baghdad",
    color: "Green",
  },
];

export default function Filter() {
  const [currentItem, setCurrentItem] = useState(1);
  const [itemperClick, setItemClick] = useState(5);
  const prevItem = () => {
    if (currentItem > 1) {
      setCurrentItem(currentItem - 1);
    }
  };

  const totalItem = Math.ceil(fitlerImtes.length / itemperClick);

  const nextItem = () => {
    if (currentItem != totalItem) {
      setCurrentItem(currentItem + 1);
    }
  };
  let lastIndex = currentItem * itemperClick;
  let firstIndex = lastIndex - itemperClick;

  console.log(
    "current",
    +firstIndex + " * " + lastIndex
    // itemperPage + " -" + lastIndex
  );

  return (
    <div className="filter_page">
      <div className="filter_head">
        {currentItem === 1 ? null : (
          <div className="fa_wrapper1" onClick={prevItem}>
            <LeftOutlined
              style={{ fontSize: "20px", color: "rgb(189, 186, 186)" }}
            />
          </div>
        )}
        {fitlerImtes.slice(firstIndex, lastIndex).map((item, i) => {
          return (
            <Button
              key={i}
              size="large"
              style={{
                padding: "0.5% 5%",
                backgroundColor: item.title === "Wearables" ? " #3B86FF" : "",
                fontWeight: "500",
                color:
                  item.title === "Wearables" ? "white" : "rgb(189, 186, 186)",
              }}
            >
              {item.title}
            </Button>
          );
        })}
        {currentItem === totalItem ? null : (
          <div
            className="fa_wrapper2"
            //  onClick={nextItem}
          >
            <RightOutlined
              style={{ fontSize: "20px", color: "rgb(189, 186, 186)" }}
            />
          </div>
        )}
      </div>
      <div className="card_wrapper">
        {items.map((item, i) => {
          return (
            <div>
              <div
                style={{
                  height: "12em",
                  maxWidth: "100%",
                  borderRadius: "10px 10px 0 0 ",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  backgroundImage: `url(${item.src})`,
                }}
              ></div>
              <div
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #e8ebed",

                  borderLeft: "1px solid #e8ebed",
                  borderRight: "1px solid #e8ebed",
                  borderRadius: "0px 0px 5px 5px",

                  backgroundColor: "white",
                }}
              >
                <p className="itme-title-">{item.title}</p>
                <div
                  style={{
                    margin: "0px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {item.color}
                  <span style={{ color: "blue" }}>{item.size}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
