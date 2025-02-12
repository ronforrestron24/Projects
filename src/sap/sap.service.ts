import { Injectable, HttpException } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class SapService {
  private readonly SAP_BASE_URL = process.env.SAP_BASE_URL;
  private readonly SAP_API_KEY = process.env.SAP_API_KEY;

  async getClientFinancialData(clientId: string): Promise<any> {
    try {
      const response = await axios.get(
        `${this.SAP_BASE_URL}/clients/${clientId}`,
        {
          headers: { 'API-Key': this.SAP_API_KEY },
        },
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Error fetching SAP FI data',
        error.response?.status || 500,
      );
    }
  }
}
