import React from "react";

function MapDetailItem({item, activeMapSideMenuItem}) {
    return (<div><span>{ activeMapSideMenuItem === 'initiative' ? item?.title : item?.description}; </span>
        <span>{item.location.level === 'district' ? `${item.location.district.name} district` : `${item.location.region.name} region`}</span>
    </div>)
}

export default MapDetailItem;
