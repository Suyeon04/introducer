import React from "react";
import styled from "@emotion/styled";
import { Map, MapMarker } from "react-kakao-maps-sdk";

interface MapProps {
  width: number;
  height: number;
}

const StyledMap = styled.map<MapProps>`
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
`;

const KakaoMap: React.FC<MapProps> = ({ width, height }) => {
  return (
    <StyledMap width={width} height={height}>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "800px", height: "600px" }}
        level={3}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}> </MapMarker>{" "}
      </Map>
    </StyledMap>
  );
};

export default KakaoMap;
