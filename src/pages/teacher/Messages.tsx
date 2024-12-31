import { MessageThread } from '../../components/messaging/MessageThread';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  isSender: boolean;
}

export function Messages() {
  const messages: Message[] = [
    {
      id: '1',
      content: 'Hello, I have a question about the homework assignment.',
      timestamp: '2024-03-20T10:30:00',
      isSender: false,
    },
    {
      id: '2',
      content: 'Of course! What would you like to know?',
      timestamp: '2024-03-20T10:32:00',
      isSender: true,
    },
    // Add more messages as needed
  ];

  const handleSendMessage = (content: string) => {
    console.log('Sending message:', content);
  };

  return (
    <div className="h-[calc(100vh-12rem)]">
      <div className="flex h-full">
        <div className="w-1/4 border-r border-gray-200">
          <div className="p-4">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Conversations
            </h2>
            {/* Add conversation list here */}
          </div>
        </div>
        <div className="flex-1">
          <MessageThread
            messages={messages}
            onSendMessage={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default Messages;
