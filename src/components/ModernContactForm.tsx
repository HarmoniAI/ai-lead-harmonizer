
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const WEBHOOK_URL = 'https://webhook.harmoniai.systems/webhook/f3c4a672-a5f4-4d14-bce2-79bb5289616b';

const ModernContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    segment: '',
    expectations: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const formatWhatsApp = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara +00 (00) 00000-0000
    if (numbers.length <= 2) {
      return `+${numbers}`;
    } else if (numbers.length <= 4) {
      return `+${numbers.slice(0, 2)} (${numbers.slice(2)})`;
    } else if (numbers.length <= 9) {
      return `+${numbers.slice(0, 2)} (${numbers.slice(2, 4)}) ${numbers.slice(4)}`;
    } else {
      return `+${numbers.slice(0, 2)} (${numbers.slice(2, 4)}) ${numbers.slice(4, 9)}-${numbers.slice(9, 13)}`;
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateWhatsApp = (whatsapp: string) => {
    const numbers = whatsapp.replace(/\D/g, '');
    return numbers.length >= 12; // DDI + DDD + número
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'whatsapp') {
      const formatted = formatWhatsApp(value);
      setFormData(prev => ({
        ...prev,
        [name]: formatted
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear errors on input
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSegmentChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      segment: value
    }));
    
    if (errors.segment) {
      setErrors(prev => ({
        ...prev,
        segment: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp é obrigatório';
    } else if (!validateWhatsApp(formData.whatsapp)) {
      newErrors.whatsapp = 'WhatsApp deve incluir DDI e número completo';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Nome da empresa é obrigatório';
    }

    if (!formData.segment) {
      newErrors.segment = 'Segmento de atuação é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = () => {
    return formData.name.trim() && 
           validateEmail(formData.email) && 
           validateWhatsApp(formData.whatsapp) && 
           formData.company.trim() && 
           formData.segment;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      console.log('Enviando dados para o webhook:', formData);
      
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Sucesso!",
          description: "Seus dados foram enviados com sucesso. Nossa equipe entrará em contato em breve!",
        });
        
        setFormData({
          name: '',
          email: '',
          whatsapp: '',
          company: '',
          segment: '',
          expectations: ''
        });
      } else {
        throw new Error('Falha ao enviar dados para o webhook');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-700 font-semibold">Nome *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Seu nome completo"
            className={`border-gray-200 focus:border-blue-600 rounded-xl h-12 ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 font-semibold">Email profissional *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="email@gmail.com"
            className={`border-gray-200 focus:border-blue-600 rounded-xl h-12 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="whatsapp" className="text-gray-700 font-semibold">WhatsApp *</Label>
          <Input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            value={formData.whatsapp}
            onChange={handleInputChange}
            placeholder="+55 (000) 00000-0000"
            className={`border-gray-200 focus:border-blue-600 rounded-xl h-12 ${errors.whatsapp ? 'border-red-500' : ''}`}
          />
          {errors.whatsapp && <p className="text-red-500 text-sm">{errors.whatsapp}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-gray-700 font-semibold">Nome da empresa *</Label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Sua empresa"
            className={`border-gray-200 focus:border-blue-600 rounded-xl h-12 ${errors.company ? 'border-red-500' : ''}`}
          />
          {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="segment" className="text-gray-700 font-semibold">Segmento de atuação *</Label>
          <Select onValueChange={handleSegmentChange} value={formData.segment}>
            <SelectTrigger className={`border-gray-200 focus:border-blue-600 rounded-xl h-12 ${errors.segment ? 'border-red-500' : ''}`}>
              <SelectValue placeholder="Selecione seu segmento" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="restaurantes">Restaurantes</SelectItem>
              <SelectItem value="clinicas">Clínicas Médicas</SelectItem>
              <SelectItem value="imobiliarias">Imobiliárias</SelectItem>
              <SelectItem value="escritorios">Escritórios de Advocacia</SelectItem>
              <SelectItem value="saloes">Salões de Beleza</SelectItem>
              <SelectItem value="academias">Academias</SelectItem>
              <SelectItem value="escolas">Escolas Particulares</SelectItem>
              <SelectItem value="ecommerce">E-commerce</SelectItem>
              <SelectItem value="servicos">Prestadores de Serviços</SelectItem>
              <SelectItem value="outros">Outros</SelectItem>
            </SelectContent>
          </Select>
          {errors.segment && <p className="text-red-500 text-sm">{errors.segment}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="expectations" className="text-gray-700 font-semibold">O que você espera de uma empresa de automação com IA?</Label>
          <Textarea
            id="expectations"
            name="expectations"
            value={formData.expectations}
            onChange={handleInputChange}
            placeholder="Conte-nos sobre suas expectativas..."
            rows={4}
            className="border-gray-200 focus:border-blue-600 rounded-xl resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading || !isFormValid()}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 text-lg rounded-xl transition-all duration-300 h-14 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Enviando...
            </>
          ) : (
            "Começar Agora"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ModernContactForm;
