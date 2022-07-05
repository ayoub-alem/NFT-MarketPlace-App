import React from 'react';
import { Text, SafeAreaView, View, Image, StatusBar } from 'react-native';
import { FlatList } from 'react-native';

import {
  CircleButton,
  DetailsBid,
  DetailsDesc,
  FocusedStatusBar,
  RectButton,
  SubInfo,
} from '../components';
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants';

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: '100%', height: 373 }}>
    <Image
      source={data.image}
      resizeMode='cover'
      style={{ width: '100%', height: '100%' }}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    ></CircleButton>
    <CircleButton
      imgUrl={assets.heart}
      handlePress={() => navigation.goBack()}
      right={15}
      top={StatusBar.currentHeight + 10}
    ></CircleButton>
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        transLucent={true}
      ></FocusedStatusBar>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255, 0.5)',
          zIndex: 1,
        }}
      >
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
        ></RectButton>
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item}></DetailsBid>}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default Details;
