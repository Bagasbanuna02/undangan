import {
  Button,
  Paper,
  AspectRatio,
  Image,
  BackgroundImage,
  Group,
  Text,
} from "@mantine/core";

import {TbIcons, TbLetterA, } from 'react-icons/tb'
import {SlEnvolopeLetter} from 'react-icons/sl'


const CoverLayout = () => {
  return (
    <>
      <Paper>
        <BackgroundImage h={100 + "vh"} w={100 + "vh"} src="/images/foto.jpeg">
            <Group>
                <Text>Naruto Uzumaki</Text>
                <Text>Hinata Hyuga</Text>
            </Group>
          <Group position="center" h={700}>
            {/* <TbLetterA size={42} /> */}
            <Button
              radius={50}
              variant="gradient"
              gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
              leftIcon={<SlEnvolopeLetter/>}
              
            >
              Open Invitation
            </Button>
          </Group>
        </BackgroundImage>
      </Paper>
    </>
  );
};

export default CoverLayout;
