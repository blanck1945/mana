import { ManaRequestInit } from "../types";

interface IManaRequest {
  getTimeout(): number;
  abort(): void;
  getAbortController(): AbortController;
  toggleIsTimeoutClean(): void;
  getIsTimeoutClean(): boolean;
}

export class ManaRequest extends Request implements IManaRequest {
  private readonly timeout: number; // Timeout for the request
  private abortController: AbortController; // Controller to abort the request
  private isTimeoutClean: boolean; // Indicates if the timeout has been cleared

  /**
   * ManaRequest constructor
   * @param url - Resource URL
   * @param options - Configuration options (ManaRequestInit)
   */
  public constructor(url: string, options: ManaRequestInit) {
    // Create an AbortController and assign its signal to the Request
    const abortController = new AbortController();
    super(url, {
      ...options,
      signal: abortController.signal, // Assign the AbortController's signal
    });

    // Additional configuration for ManaRequest
    this.timeout = options.timeout || 5000; // Default timeout value: 5000ms
    this.abortController = abortController; // Assign the AbortController
    this.isTimeoutClean = false; // Initialize the timeout state
  }

  /**
   * Gets the configured timeout value
   * @returns {number} - Timeout value in milliseconds
   */
  public getTimeout(): number {
    return this.timeout;
  }

  /**
   * Aborts the request using the AbortController
   */
  public abort(): void {
    this.abortController.abort();
  }

  /**
   * Gets the AbortController associated with this request
   * @returns {AbortController} - Instance of the AbortController
   */
  public getAbortController(): AbortController {
    return this.abortController;
  }

  /**
   * Toggles the state of the `isTimeoutClean` property
   */
  public toggleIsTimeoutClean(): void {
    this.isTimeoutClean = !this.isTimeoutClean;
  }

  /**
   * Gets the current state of `isTimeoutClean`
   * @returns {boolean} - State of the timeout clearance
   */
  public getIsTimeoutClean(): boolean {
    return this.isTimeoutClean;
  }
}
