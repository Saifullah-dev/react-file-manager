import React from "react";

// =============================================================================
// File System Types
// =============================================================================

/**
 * Represents a file or directory item in the file manager.
 */
export interface FileItem {
  /** Display name of the file or directory */
  name: string;
  /** Whether this item is a directory */
  isDirectory: boolean;
  /** Full path of the file or directory */
  path: string;
  /** Last updated timestamp as an ISO string */
  updatedAt?: string;
  /** File size in bytes */
  size?: number;
  /** Whether the file is currently in rename/edit mode */
  isEditing?: boolean;
  /** Unique key identifier */
  key?: number;
  /** URL for the file thumbnail image */
  thumbnailUrl?: string;
}

/**
 * Represents a node in the folder tree navigation, extending FileItem
 * with nested subdirectory information.
 */
export interface FolderTreeNode extends FileItem {
  /** Child directories within this folder */
  subDirectories: FolderTreeNode[];
}

// =============================================================================
// Upload Configuration
// =============================================================================

/**
 * Configuration for file upload behavior.
 */
export interface FileUploadConfig {
  /** The URL endpoint to upload files to */
  url: string;
  /** Additional headers to include in the upload request */
  headers?: Record<string, string>;
  /** HTTP method to use for uploading */
  method?: "POST" | "PUT";
  /** Whether to send credentials with the upload request */
  withCredentials?: boolean;
}

// =============================================================================
// Permissions
// =============================================================================

/**
 * Defines the set of actions a user is permitted to perform.
 */
export interface Permissions {
  /** Whether the user can create new folders */
  create?: boolean;
  /** Whether the user can upload files */
  upload?: boolean;
  /** Whether the user can move files/folders */
  move?: boolean;
  /** Whether the user can copy files/folders */
  copy?: boolean;
  /** Whether the user can rename files/folders */
  rename?: boolean;
  /** Whether the user can download files */
  download?: boolean;
  /** Whether the user can delete files/folders */
  delete?: boolean;
}

// =============================================================================
// Sort Configuration
// =============================================================================

/**
 * Configuration for sorting file listings.
 */
export interface SortConfig {
  /** The field to sort by */
  key: "name" | "size" | "modified";
  /** Sort direction */
  direction: "asc" | "desc";
}

// =============================================================================
// Clipboard State
// =============================================================================

/**
 * Represents the current state of the clipboard for cut/copy operations.
 */
export interface ClipboardState {
  /** Files currently in the clipboard */
  files: FileItem[];
  /** Whether the clipboard operation is a move (true) or copy (false) */
  isMoving: boolean;
}

// =============================================================================
// Layout
// =============================================================================

/**
 * The display layout mode for the file listing.
 */
export type LayoutType = "grid" | "list";

// =============================================================================
// Context Menu
// =============================================================================

/**
 * Represents a single item in the context menu.
 */
export interface ContextMenuItem {
  /** Display text for the menu item */
  title: string;
  /** Icon element to display alongside the title */
  icon: React.ReactNode;
  /** Callback invoked when the menu item is clicked */
  onClick: () => void;
  /** Nested submenu items */
  children?: ContextMenuItem[];
  /** Additional CSS class name */
  className?: string;
  /** Whether this item should be hidden */
  hidden?: boolean;
  /** Whether to render a divider after this item */
  divider?: boolean;
  /** Whether this item is in a selected/active state */
  selected?: boolean;
  /** Permission flag; if false, the item is disabled */
  permission?: boolean;
}

// =============================================================================
// Trigger Action
// =============================================================================

/**
 * Represents the state and controls for a triggerable action (e.g., modals, dialogs).
 */
export interface TriggerAction {
  /** Whether the action is currently active/visible */
  isActive: boolean;
  /** The type identifier for the current action, or null if inactive */
  actionType: string | null;
  /** Show/activate the action with a given type */
  show: (type: string) => void;
  /** Close/deactivate the action */
  close: () => void;
}

// =============================================================================
// Error Types
// =============================================================================

/**
 * Represents an error encountered by the file manager.
 */
export interface FileManagerError {
  /** Error type identifier */
  type: string;
  /** Human-readable error message */
  message: string;
  /** Optional HTTP response information for upload/network errors */
  response?: {
    status: number;
    statusText: string;
    data: any;
  };
}

// =============================================================================
// Search State
// =============================================================================

/**
 * Represents the current state of the search feature.
 */
export interface SearchState {
  /** The current search query string */
  query: string;
  /** Whether search mode is currently active */
  isActive: boolean;
  /** Array of active filter chip names (e.g., "Images", "Documents", "This Week") */
  activeFilters: string[];
  /** Whether to search recursively through all folders */
  isRecursive: boolean;
}

// =============================================================================
// Undo / Redo Types
// =============================================================================

/**
 * The types of actions that can be undone/redone.
 */
export type ActionType = "rename" | "delete" | "move" | "createFolder" | "copy";

/**
 * Represents an action that can be undone or redone.
 */
export interface UndoableAction {
  /** The type of action that was performed */
  type: ActionType;
  /** Timestamp (epoch ms) when the action was performed */
  timestamp: number;
  /** Data associated with the action for undo/redo purposes */
  data: {
    /** Files involved in the action */
    files?: FileItem[];
    /** Previous name (for rename actions) */
    previousName?: string;
    /** New name (for rename actions) */
    newName?: string;
    /** Source path (for move/copy actions) */
    source?: string;
    /** Destination path (for move/copy actions) */
    destination?: string;
  };
}

// =============================================================================
// FileManager Component Props
// =============================================================================

/**
 * Props for the main FileManager component.
 */
export interface FileManagerProps {
  // ---- Required ----
  /** Array of file and directory items to display */
  files: FileItem[];

  // ---- Upload Configuration ----
  /** Configuration for file upload functionality */
  fileUploadConfig?: FileUploadConfig;

  // ---- Loading State ----
  /** Whether the file manager is in a loading state */
  isLoading?: boolean;

  // ---- Event Callbacks ----
  /** Called when a new folder is created */
  onCreateFolder?: (name: string, parentFolder: FileItem | null) => void;
  /** Called when a file begins uploading; may return additional form data */
  onFileUploading?: (
    file: File,
    currentFolder: FileItem | null
  ) => Record<string, any> | void;
  /** Called when a file upload completes */
  onFileUploaded?: (response: any) => void;
  /** Called when files are cut to clipboard */
  onCut?: (files: FileItem[]) => void;
  /** Called when files are copied to clipboard */
  onCopy?: (files: FileItem[]) => void;
  /** Called when files are pasted from clipboard */
  onPaste?: (
    files: FileItem[],
    destination: FileItem | null,
    operationType: "move" | "copy"
  ) => void;
  /** Called when a file or folder is renamed */
  onRename?: (file: FileItem, newName: string) => void;
  /** Called when files are downloaded */
  onDownload?: (files: FileItem[]) => void;
  /** Called when files are deleted */
  onDelete?: (files: FileItem[]) => void;
  /** Called when the layout mode changes */
  onLayoutChange?: (layout: LayoutType) => void;
  /** Called when the refresh action is triggered */
  onRefresh?: () => void;
  /** Called when a file is opened (e.g., double-clicked) */
  onFileOpen?: (file: FileItem) => void;
  /** Called when the current folder path changes */
  onFolderChange?: (path: string) => void;
  /** Called when file selection changes (legacy) */
  onSelect?: (files: FileItem[]) => void;
  /** Called when file selection changes */
  onSelectionChange?: (files: FileItem[]) => void;
  /** Called when an error occurs */
  onError?: (error: FileManagerError, file?: File) => void;

  // ---- Layout & Display ----
  /** The display layout mode */
  layout?: LayoutType;
  /** Maximum allowed file size for uploads, in bytes */
  maxFileSize?: number;
  /** Whether to enable the built-in file preview feature */
  enableFilePreview?: boolean;
  /** Base URL path for file previews */
  filePreviewPath?: string;
  /** Comma-separated list of accepted file MIME types or extensions */
  acceptedFileTypes?: string;
  /** Height of the file manager container */
  height?: string | number;
  /** Width of the file manager container */
  width?: string | number;
  /** Initial directory path to display on mount */
  initialPath?: string;
  /** Custom component for rendering file previews */
  filePreviewComponent?: (file: FileItem) => React.ReactElement;

  // ---- Theming & Styling ----
  /** Primary accent color */
  primaryColor?: string;
  /** Font family for the file manager */
  fontFamily?: string;
  /** Theme mode */
  theme?: "light" | "dark" | "system";
  /**
   * Custom design token overrides applied as inline CSS custom properties.
   * Keys can be provided with or without the "--fm-" prefix.
   * Example: `{ "color-bg": "#1a1a1a" }` sets `--fm-color-bg: #1a1a1a`.
   */
  customTokens?: Record<string, string>;
  /** Additional CSS class name for the root element */
  className?: string;
  /** Inline styles for the root element */
  style?: React.CSSProperties;

  // ---- Localization ----
  /** Language code for i18n (e.g., "en", "es", "fr") */
  language?: string;

  // ---- Permissions ----
  /** Permissions configuration controlling available actions */
  permissions?: Permissions;

  // ---- Navigation ----
  /** Whether the side navigation panel is collapsible */
  collapsibleNav?: boolean;
  /** Whether the side navigation is expanded by default */
  defaultNavExpanded?: boolean;

  // ---- Formatting ----
  /** Custom date formatting function */
  formatDate?: (date: string) => string;

  // ---- Search ----
  /** Called when the user searches; can be used for server-side search delegation */
  onSearch?: (query: string, filters: string[]) => void;

  // ---- Undo / Redo Callbacks ----
  /** Called when an action is undone */
  onUndo?: (action: UndoableAction) => void;
  /** Called when an action is redone */
  onRedo?: (action: UndoableAction) => void;

  // ---- Favorites & Quick Access ----
  /** Called when a file/folder is favorited or unfavorited */
  onFavoriteToggle?: (file: FileItem, isFavorited: boolean) => void;
  /** Called when recent files list changes */
  onRecentFiles?: (recentFiles: FileItem[]) => void;
  /** Initial favorite file paths */
  initialFavorites?: string[];

  // ---- Iteration 3: Tabs ----
  /** Whether to enable multi-tab navigation */
  enableTabs?: boolean;
  /** Maximum number of tabs allowed */
  maxTabs?: number;
  /** Called when a tab is added, closed, or switched */
  onTabChange?: (event: { type: "add" | "close" | "switch"; tabId?: number; path?: string }) => void;

  // ---- Iteration 3: Advanced Drag & Drop ----
  /** Called when files are dropped from the OS desktop */
  onExternalDrop?: (files: File[], event: DragEvent) => void;

  // ---- Iteration 3: Batch Operations ----
  /** Called when batch operation progress changes */
  onOperationProgress?: (event: BatchProgressEvent) => void;

  // ---- Iteration 3: Tagging ----
  /** Available tag definitions with name and color */
  tags?: TagDefinition[];
  /** Called when a tag is added or removed from a file */
  onTagChange?: (file: FileItem, tagName: string, action: "add" | "remove") => void;

  // ---- Iteration 3: Column Customization ----
  /** Initial visible columns in list view */
  columns?: string[];
  /** Called when column visibility changes */
  onColumnConfigChange?: (visibleColumns: string[]) => void;

  // ---- Iteration 3: Clipboard ----
  /** Called when the clipboard contents change */
  onClipboardChange?: (clipboard: ClipboardState | null) => void;
}

// =============================================================================
// Tag Types
// =============================================================================

/**
 * Definition for a tag color option.
 */
export interface TagDefinition {
  /** Display name of the tag */
  name: string;
  /** CSS color value for the tag */
  color: string;
}

// =============================================================================
// Batch Progress Types
// =============================================================================

/**
 * Events emitted during batch operations.
 */
export interface BatchProgressEvent {
  /** Event type */
  type: "start" | "progress" | "cancel" | "close";
  /** Operation being performed */
  operationType?: string;
  /** Total number of items in the batch */
  totalItems?: number;
  /** ID of the item being updated */
  itemId?: number;
  /** Item status */
  status?: "pending" | "in_progress" | "completed" | "failed" | "skipped";
  /** Progress percentage (0-100) */
  progress?: number;
  /** Error message if failed */
  error?: string;
}
