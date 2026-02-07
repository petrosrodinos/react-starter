import type { ChatMessage } from "@/features/chats/interfaces/chats.interfaces";

export interface BaseWebsocketPayload {
    timestamp: string;
    event_id: string;
}

export interface ChatMessagePayload extends BaseWebsocketPayload {
    chat_uuid: string;
    message_uuid: string;
    sender_uuid: string;
    content: string;
    message_type: string;
    message?: ChatMessage;
}

export interface ChatTypingPayload extends BaseWebsocketPayload {
    chat_uuid: string;
    account_uuid: string;
    is_typing: boolean;
}

export interface SystemPayload extends BaseWebsocketPayload {
    message: string;
    severity: 'info' | 'warning' | 'critical';
    action_required?: boolean;
}

export type WebsocketPayload =
    | ChatMessagePayload
    | ChatTypingPayload
    | SystemPayload;
