
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const WEBHOOK_URL = 'https://n8norion.harmoniai.systems/webhook-test/f3c4a672-a5f4-4d14-bce2-79bb5289616b';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    segment: '',
    expectations: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSegmentChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      segment: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.company || !formData.segment) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

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
        
        // Reset form
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
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-fade-in">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Pronto para revolucionar sua prospecção?
        </h3>
        <p className="text-gray-600">
          Preencha o formulário e descubra como nossa IA pode transformar seus resultados
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="name">Nome *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Seu nome completo"
              required
              className="border-gray-200 focus:border-harmoni-blue rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="seu@email.com"
              required
              className="border-gray-200 focus:border-harmoni-blue rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp *</Label>
            <Input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="(00) 90000-0000"
              required
              className="border-gray-200 focus:border-harmoni-blue rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Nome da empresa *</Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Sua empresa"
              required
              className="border-gray-200 focus:border-harmoni-blue rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="segment">Segmento que deseja prospectar *</Label>
          <Select onValueChange={handleSegmentChange} value={formData.segment}>
            <SelectTrigger className="border-gray-200 focus:border-harmoni-blue rounded-lg">
              <SelectValue placeholder="Selecione o segmento" />
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
        </div>

        <div className="space-y-2">
          <Label htmlFor="expectations">O que você espera que uma empresa de automação com I.A. faça por você?</Label>
          <Textarea
            id="expectations"
            name="expectations"
            value={formData.expectations}
            onChange={handleInputChange}
            placeholder="Conte-nos sobre suas expectativas e desafios atuais na prospecção..."
            rows={3}
            className="border-gray-200 focus:border-harmoni-blue rounded-lg resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-harmoni-blue hover:bg-harmoni-blue-dark text-white font-semibold py-3 text-lg rounded-lg transition-all duration-300"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Enviando...
            </>
          ) : (
            "🚀 Quero gerar mais oportunidades com IA"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
