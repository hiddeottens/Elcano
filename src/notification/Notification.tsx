import React from 'react';
import { Flex, Text } from 'rebass';
import { AnimatePresence, motion } from 'framer-motion';
import styled from '@emotion/styled';

export type NotificationType = 'success' | 'error';

export interface NotificationProps {
  notification: boolean;
  type: NotificationType;
  text: string;
}

interface StyledNotificationProps {
  type: NotificationType;
}

const getBackgroundColor = ({ type }: StyledNotificationProps): string => {
  if (type === 'success') {
    return '#2ddad3';
  }
  return '#f46d6d';
};

const StyledNotification = styled(motion.div)<StyledNotificationProps>`
  background-color: ${props => getBackgroundColor(props)};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 2em;
  margin-top: 3.5em;
  z-index: 9998;
`;

export const Notification = ({
  notification,
  type,
  text,
}: NotificationProps) => (
  <Flex variant="notificationContainer">
    <AnimatePresence>
      {notification && (
        <StyledNotification
          type={type}
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
        >
          <Text>{text}</Text>
        </StyledNotification>
      )}
    </AnimatePresence>
  </Flex>
);

export default Notification;
