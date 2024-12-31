import { MessageThread } from '../../components/messaging/MessageThread';
import { Message } from '../../types';

export function AdminMessages() {
  const messages: Message[] = [
    {
      id: '1',
      content: 'Hello, I need to discuss the new curriculum changes.',
      timestamp: '2024-03-20T10:30:00',
      isSender: false,
    },
    {
      id: '2',
      content: "Of course! I'll schedule a meeting to discuss this in detail.",
      timestamp: '2024-03-20T10:32:00',
      isSender: true,
    },
  ];

  const handleSendMessage = (content: string) => {
    console.log('Sending message:', content);
  };

  return (
    <div className="h-[calc(100vh-12rem)]">
      <div className="flex h-full">
        <div className="w-1/4 border-r border-gray-200">
          <div className="p-4">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Messages</h2>
            {/* Add conversation list */}
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

export default AdminMessages;
