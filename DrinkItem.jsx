import { Center, Image, Text, WrapItem } from '@chakra-ui/react';

export const DrinkItem = ({ drink, clickFn }) => {
  return (
    // you may try later to add some display (flex or grid) to WrapItem
    <WrapItem >
      <Center gap={8} cursor={'pointer'} onClick={() => clickFn(drink)}>
        <Image
          src={drink.imgUrl}
          w={50}
          h={50}
          borderRadius={'xl'}
          alt={drink.alt}
        />
        <Text fontWeight={'450'} as='samp'>{drink.name}</Text>
      </Center>
    </WrapItem>
  );
};
