import React from 'react';
import { Input, Row, Col } from 'antd';
import needIcon from '../../assets/icons/white-initiative.svg';
import resourcesIcon from '../../assets/icons/white-human-resources.svg';
import iniativesIcons from '../../assets/icons/white-initiative.svg';
import './styles.css';

const { Search } = Input;

const AdvancedSearch = () => {
    return (
        <div className="AdvancedSearch">
            <section className="SearchIntro">
                <Search className="searchInput"
                    placeholder="Masks"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                />
            </section>
            <section className="SearchIcons">
                <Row>
                    <Col span={8}>
                        <img src={needIcon} />
                        <h2>57 Needs</h2>
                    </Col>
                    <Col span={8}><img src={resourcesIcon} />
                    <h2>231 Resources</h2>
                    </Col>
                    <Col span={8}><img src={iniativesIcons} />
                    <h2>56 Iniatives</h2>
                    </Col>
                </Row>
            </section>
                <h4>Pamoja App aim to identify and organize initiatives and resources directly supporting the COVID-19 pandemic and its ripple effects, strengthen emergency operations and communications between the government, development partners and the private sector and ensure that demands and supply of material and human resources are matched as effectively as possible.</h4>
        </div>
    )
}

export default AdvancedSearch;