// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React, { useEffect } from 'react';
import FileUploadOverlay from 'components/file_upload_overlay';
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import "./manage_sales.scss";

export default class ManageSales extends React.PureComponent {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            pieChartOptions: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Lead Source'
                },
                subtitle: {
                    text: 'Showing Pie graph based on the lead sources'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        },
                        showInLegend: true
                    }
                },
                series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                        name: 'Facebook',
                        y: 61.41,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Walkin',
                        y: 11.84
                    }, {
                        name: 'JustDial',
                        y: 10.85
                    }]
                }]
            },
            barChartOptions: {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Revenue Vs Day'
                },
                subtitle: {
                    text: 'Showing Bar graph based on the lead sources'
                },
                xAxis: {
                    categories: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                    title: {
                        text: null
                    }
                },
                yAxis: {

                    title: {
                        text: 'Value in Dollars',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' millions'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor:
                        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Monday',
                    data: [{ name: "Monday", y: 3500 }, 2900, 4055]
                }]
            }
        }
    }

    onClickCloseChannel = () => {

    }


    componentDidMount(prevProps) {

    }

    static getDerivedStateFromProps(props, state) {
        return null;
    }

    render() {
        return (
            <div className="row manage-sales-section">

                <div className="col-sm-4 col-md-4 col-lg-5">
                    <div className="highchart-element">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={this.state.pieChartOptions}
                        />
                    </div>
                </div>

                <div className="col-sm-4 col-md-4 col-lg-5">
                    <div className="highchart-element">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={this.state.barChartOptions}
                        />
                    </div>
                </div>

            </div>

        );
    }
}
