import "./index.css"
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { PolarArea } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";



const Charts = () => {
    return (
        <div className="row">
            <div className="single-container circle col-10 offset-1 mb-4">
                <div className="col-6 ">

                    <Doughnut data={{
                        labels: ["work", "play", "Eat", "mario"],
                        datasets: [
                            {

                                data: [100, 40, 32, 10],
                                backgroundColor: [
                                    " rgb(16, 0, 165)",
                                    "rgb(400, 35, 155",
                                    " rgb(126, 12, 24)",
                                    "rgb(400, 335, 44",

                                ]


                            },

                        ],



                    }} options={{

                        cutout: 130,
                        animation: {
                            animateRotate: true,
                            animateScale: true,
                            duration: 3000,
                            easing: "easeOutElastic",
                            hoverBorder: 0,

                        },


                        hoverOffset: 10,

                        plugins: {
                            title: {
                                font: {
                                    size: 24,

                                },
                                display: true,
                                color: "Black",
                                text: "This is an excersize",
                                position: "right",
                                padding: {
                                    top: 10,
                                    bottom: 20,
                                }

                            },
                        },
                    }} />

                </div>

                <div className="col-5">


                </div>



            </div>



            <div className="single-container  col-10 offset-1 mb-4">
                <PolarArea
                    data={{
                        labels: ["Ovechkin goals", "Crosby goals", "Ovechkin assist", "Crosby assist", "ovechkin shot", "crosby shot"],

                        datasets: [
                            {
                                data: [
                                    55,
                                    24,
                                    34,
                                    48,
                                    144,
                                    125
                                ],

                                backgroundColor: ["rgb(106, 0, 180)", "rgb(2, 0, 161 )"],
                            }
                        ]




                    }} height={50} options={{
                        animation: {
                            animateRotate: false,
                            animateScale: true,
                            easing: "linear",
                            duration: 2000,

                        },
                        scales: {
                            r: {
                                pointLabels: {
                                    display: true,
                                    centerPointLabels: true,
                                    font: {
                                        size: 24
                                    }
                                }
                            }
                        }
                    }} />



            </div>

            <div className="single-container  col-10 offset-1 mb-4">



                <div className="col-12">
                    <Bar data={{
                        labels: ["One", "two", "Three", "four", "five", "six"],

                        datasets: [
                            {
                                label: "This is one label",
                                data: [12, 45, 62, 30, 10, 80],
                                backgroundColor: ["rgb(106, 0, 180)"],
                            },

                            {
                                label: "This is another label",
                                data: [90, 10, 24, 45, 55, 100],
                                backgroundColor: ["rgb(2, 0, 161 )"]
                            }
                        ],


                    }} height={100} options={{

                        indexAxis: 'y',


                        plugins: {
                            title: {
                                font: {
                                    size: 24,

                                },
                                display: true,
                                color: "Black",
                                text: "This is an excersize",
                                position: "bottom",
                                padding: {
                                    top: 10,
                                    bottom: 20,
                                }

                            },



                        },


                        elements: {


                        }


                    }} />

                </div>

            </div>

            {/* New chart */}
            <div className="single-container  col-10 offset-1 mb-4">



                <div className="col-12">

                    <Line data={
                        {
                            labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
                            datasets: [{

                                fill: 'start',
                                tension: 0.16,

                                animations: {
                                    tension: {
                                        loop: true,
                                        duration: 4000,
                                        easing: 'easeInElastic',
                                        from: 0.16,
                                        to: 0.59,
                                        delay: 0,
                                    }
                                },

                                pointBackgroundColor: "white",
                                label: "Consumed Burgers",
                                data: [12, 45, 8, 100, 0, 69],
                                backgroundColor: ["red"],
                            },
                            {
                                fill: 'start',
                                tension: 0.16,

                                animations: {
                                    tension: {
                                        loop: true,
                                        duration: 4000,
                                        easing: 'easeInElastic',
                                        from: 0.16,
                                        to: 0.59,
                                        delay: 0,

                                    }
                                },

                                pointBackgroundColor: "aqua",
                                label: "Consumed pastas",
                                data: [51, 23, 90, 19, 61, 180],
                                backgroundColor: ["purple"],
                            },
                            {
                                fill: 'start',
                                tension: 0.16,

                                animations: {
                                    tension: {
                                        loop: true,
                                        duration: 5000,
                                        easing: 'easeInElastic',
                                        from: 0.16,
                                        to: 0.59,
                                        delay: 0,

                                    }
                                },

                                pointBackgroundColor: "blue",
                                label: "Consumed cookies",
                                data: [56, 78, 54, 85, 47, 23],
                                backgroundColor: ["salmon"],
                            }

                            ],

                        }} />


                </div>

            </div>

            <div className="single-container  col-10 offset-1 mb-4 ">



                <div className="col-12">
                    <Radar data={{

                        labels: ['Shots', 'Goals', 'Penalties', 'TOI', 'fights'],
                        datasets: [
                            {

                                label: "Player one",
                                data: [49, 50, 40, 92, 78],
                                backgroundColor: [" rgba(200 ,16, 46,0.7)"],
                                borderColor: " rgb(200 ,16, 46)",
                                borderWidth:5,
                                tension: 0.11,



                            },
                            {
                                label: "Player two",
                                data: [68, 51, 3, 83, 89],
                                backgroundColor: ["rgba(30, 30, 148,0.7)"],
                                borderColor: "rgb(30, 30, 148)",
                                borderWidth:5,
                               tension: 0.11,
                                

                            }



                        ],
                        borderwidth: 1
                    }} options={{
                        indexAxis: 'y',
                        maintainAspectRatio: true,
                        elements:{
                      
                        }


                    }} />


                </div>

            </div>





        </div>
    );

}

export default Charts; 